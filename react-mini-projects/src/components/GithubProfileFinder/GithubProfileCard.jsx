import React from "react";
import { FaWindowClose } from "react-icons/fa";
const GithubProfileCard = ({ data , isCardOpen , setCardOpen }) => {

    const handleClose = ()=>{
        setCardOpen(false);
    }
  return (
    <div className="card">
      <div className="profile-pic">
        <img src={data?.avatar_url} alt="" />
      </div>
      <div className="profile-name">
        <a href={`https://github.com/${data?.login}`}>
          <span>@</span>
          {data?.login}
        </a>
        <div className="name">{data?.name}</div>
      </div>

      <div className="profile-bio">{data?.bio}</div>
      <div className="profile-info">
        <span>Followers:{data?.followers}</span>
        <span>Following:{data?.following}</span>
        <span>Repositories:{data?.public_repos}</span>
        <span>Gists:{data?.public_gists}</span>
      </div>
      <FaWindowClose className="close-btn" onClick={()=>handleClose()}/>
    </div>
  );
};

export default GithubProfileCard;
