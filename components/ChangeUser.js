import { useMoralis } from "react-moralis";

function ChangeUser() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter the UserName (current:${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div classNames="text-sm ">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="absolute  top-5 lg:top-12 right-5 bg-orange-300 text-black rounded-full p-2 hover:opacity-75"
      >
        {" "}
        Change Username
      </button>
    </div>
  );
}

export default ChangeUser;
