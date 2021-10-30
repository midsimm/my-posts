import React from 'react';
import { Link } from 'react-router-dom'
import '../componentsCSS/postId.css';
export function PostId(props) {
    const id = props.id + 1;
        return (
            <Link to={`/post-${id}`}>
            <li className="postId">{id}</li>
            </Link>
        );
    }