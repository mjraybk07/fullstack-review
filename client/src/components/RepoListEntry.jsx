import React from 'react';
import moment from 'moment';


const RepoListEntry = (props) => (
  <div>
    <h5> ------------ </h5>
    <div>Repo:  {props.repo.name} </div>
    <div>Repo Owner:  <a href={props.repo.owner.html_url}>{props.repo.owner.login}</a> </div>
    <div>Repo Url:  <a href={props.repo.svn_url}>{props.repo.svn_url}</a></div>
    <div>Description:  {props.repo.description || 'n/a'} </div>
    <div>Created:  {moment(props.repo.created_at).format('llll')} </div>
    <div>Updated:  {moment(props.repo.updated_at).format('llll')} </div>
    <div>Watchers:  {props.repo.watchers} </div>
  </div>
)

export default RepoListEntry;