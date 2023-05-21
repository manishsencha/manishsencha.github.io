 interface RepoOwner {
    "name": string | null;
    "email": string | null;
    "starred_at": string;
    "login": string;
    "id": number;
    "node_id": string;
    "avatar_url": string;
    "gravatar_id": string | null;
    "url": string;
    "html_url": string;
    "followers_url": string;
    "following_url": string;
    "gists_url": string;
    "starred_url": string;
    "subscriptions_url": string;
    "organizations_url": string;
    "repos_url": string;
    "events_url": string;
    "received_events_url": string;
    "type": string;
    "site_admin": boolean;

};
interface RepoLicense {
    "key": string;
    "name": string;
    "spdx_id": string;
    "url": string;
    "node_id": string;
}
interface RepoPermissions {
    "admin": boolean;
    "maintain": boolean;
    "push": boolean;
    "triage": boolean;
    "pull": boolean;
}
interface RepoCOC {
    "key": string;
    "name": string;
    "url": string;
    "body": string;
    "html_url": string | null;
}

export interface RepoResponse {
    "id": number;
    "node_id": string;
    "name": string;
    "full_name": string;
    "private": boolean;
    "owner": RepoOwner;
    "html_url": string;
    "description": string | null;
    "fork": boolean;
    "url": string;
    "keys_url": string;
    "collaborators_url": string;
    "teams_url": string;
    "hooks_url": string;
    "forks_url": string;
    "issue_events_url": string;
    "events_url": string;
    "assignees_url": string;
    "branches_url": string;
    "tags_url": string;
    "blobs_url": string;
    "git_tags_url": string;
    "git_refs_url": string;
    "trees_url": string;
    "statuses_url": string;
    "languages_url": string;
    "stargazers_url": string;
    "contributors_url": string;
    "subscribers_url": string;
    "subscription_url": string;
    "commits_url": string;
    "git_commits_url": string;
    "comments_url": string;
    "issue_comment_url": string;
    "contents_url": string;
    "compare_url": string;
    "merges_url": string;
    "archive_url": string;
    "downloads_url": string;
    "issues_url": string;
    "pulls_url": string;
    "milestones_url": string;
    "notifications_url": string;
    "labels_url": string;
    "releases_url": string;
    "deployments_url": string;
    "created_at": string | null;
    "updated_at": string | null;
    "pushed_at": string | null;
    "git_url": string;
    "ssh_url": string;
    "clone_url": string;
    "svn_url": string;
    "homepage": string | null;
    "size": number;
    "stargazers_count": number;
    "watchers_count": number;
    "language": string | null;
    "has_issues": boolean;
    "has_projects": boolean;
    "has_downloads": boolean;
    "has_wiki": boolean;
    "has_pages": boolean;
    "has_discussions": boolean;
    "forks_count": number;
    "mirror_url": string;
    "archived": boolean;
    "disabled": boolean;
    "open_issues_count": number;
    "license": RepoLicense | null;
    "allow_forking": boolean;
    "is_template": boolean;
    "web_commit_signoff_required": boolean;
    "topics": string[];
    "visibility": string;
    "forks": number;
    "open_issues": number;
    "watchers": number;
    "default_branch": string;
    "permissions": RepoPermissions | null;
    "role_name": string;
    "temp_clone_token": string;
    "delete_branch_on_merge": boolean;
    "subscribers_count": number;
    "network_count": number;
    "code_of_conduct": RepoCOC | null;
}