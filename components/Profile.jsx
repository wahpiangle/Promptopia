import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import PromptCard from "./PromptCard";

const ProfilePromptCard = ({ post, handleEdit, handleDelete }) => {
  return (
    <PromptCard
      post={post}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const router = useRouter();
  return (
    <section className="w-full">
      <>
        <h1 className="head_text text-left">
          <span className="blue_gradient">{name} Profile</span>
        </h1>
        <p className="desc text-left">{desc}</p>
        <div className="mt-10 prompt_layout w-full">
          <Suspense fallback={<div className="loader-container"><span className="loader"></span></div>}>
            {data.map((post) => (
              <ProfilePromptCard
                key={post._id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ))}
          </Suspense>
        </div>
      </>
    </section>
  );
};

export default Profile;

