import React from 'react';
import _ from 'lodash';
import { PostId } from './postId';
export function PostIdList() {
    const postsList = _.range(8).map((post) =>
        <PostId id={post} />);
    return (
        <div>
            <ul>
                {postsList}
            </ul>
        </div>
    );
}