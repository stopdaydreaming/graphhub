import React from 'react';

import NetworkTab from '../shared/NetworkTab';
import {
  getRepo,
  getIssues,
  getComments,
  closeIssue as closeIssueRest
} from '../../services/githubRestClient';
import SummaryInfo from './SummaryInfo';
import PanelHeading from './PanelHeading';
import { IssueBody } from './IssueBody';

export class RestRepo extends React.Component {
  constructor() {
    super();
    this.state = {
      repository: {
        owner: {}
      },
      issues: [],
      comments: []
    };
  }

  async componentDidMount() {
    const repository = await this.getRepository();

    this.setState({ repository: repository });

    const issues = await this.getIssues();

    this.setState({ issues: issues });

    const comments = await Promise.all(
      issues.map(async issue => {
        const commentSet = await this.getComments(issue.number);
        return {
          issueNumber: issue.number,
          commentSet: commentSet
        };
      })
    );

    this.setState({ comments: comments });
  }

  async getRepository() {
    const start = new Date().getTime();
    const result = await getRepo({
      owner: this.props.owner,
      repo: this.props.repo
    });
    const end = new Date().getTime();
    const time = end - start;

    this.updateCalls(result, time);
    return result.data;
  }

  async getIssues() {
    const start = new Date().getTime();
    const result = await getIssues({
      owner: this.props.owner,
      repo: this.props.repo
    });
    const end = new Date().getTime();
    const time = end - start;

    this.updateCalls(result, time);
    return result.data;
  }

  async getComments(issueNumber) {
    const start = new Date().getTime();
    const result = await getComments({
      owner: this.props.owner,
      repo: this.props.repo,
      issueNumber: issueNumber
    });
    const end = new Date().getTime();

    const time = end - start;

    this.updateCalls(result, time);
    return result.data;
  }

  updateCalls(result, time) {
    const size = result.request.response.length;
    this.props.setCalls({
      ...this.props.calls,
      rest: {
        callCount: this.props.calls.rest.callCount + 1,
        size: this.props.calls.rest.size + size,
        time: this.props.calls.rest.time + time
      }
    });
  }

  async closeIssue(issueNumber, index) {
    await closeIssueRest({
      owner: this.props.owner,
      repo: this.props.repo,
      issueNumber
    });
    const newIssues = this.state.issues;
    newIssues.splice(index, 1);
    this.setState({ issues: newIssues });
  }

  render() {
    return (
      <div className="column">
        <div className="box">
          <p className="has-text-danger">REST</p>
          <NetworkTab type="rest" calls={this.props.calls}></NetworkTab>
          <hr />
          <SummaryInfo repository={this.state.repository} />
          <hr />
          <nav className="panel">
            <PanelHeading issues={this.state.issues}></PanelHeading>
            {this.state.issues.map((issue, index) => (
              <IssueBody
                key={issue.number}
                index={index}
                issue={issue}
                comments={this.state.comments}
                closeIssue={(issueNumber, index) =>
                  this.closeIssue(issueNumber)
                }
              ></IssueBody>
            ))}
          </nav>
        </div>
      </div>
    );
  }
}

export default RestRepo;
