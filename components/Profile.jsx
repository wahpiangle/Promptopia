import React, { Suspense } from "react";
import { useRouter } from "next/navigation";

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
      {name ? (
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
      ) : (<>
        <h1 className="head_text text-left">
            <span className="blue_gradient">Error 404</span>
          </h1>
          <p className="desc text-left">Page Not Found</p>
          <button className="black_btn mt-8" onClick={router.push('/')}>Click Here to return to the main page</button>
      </>)

      }
    </section>
  );
};


const PromptCard = React.lazy(() => import("@components/PromptCard"));

export default Profile;