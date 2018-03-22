import React from 'react';
import moment from 'moment';


const RepoListEntry = (props) => (
  <div>
    <h5> ------------ </h5>
    <div>Repo:  {props.repo.name} </div>
    <div>Repo Owner:  <a href={props.repo.ownerUrl}>{props.repo.ownerLogin}</a> </div>
    <div>Repo Url:  <a href={props.repo.url}>{props.repo.url}</a></div>
    <div>Description:  {props.repo.description || 'n/a'} </div>
    <div>Created:  {moment(props.repo.createdAt).format('llll')} </div>
    <div>Updated:  {moment(props.repo.updatedAt).format('llll')} </div>
    <div>Watchers:  {props.repo.watchers} </div>
  </div>
)

export default RepoListEntry;