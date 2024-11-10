import Image from "next/image";
import "../styles/body.css"; // Import custom CSS file

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <div className="name">mohammadmuneeb</div>
        <div className="pic">
          <Image className="profile-pic" src="/images/my.jpg" alt="Logo" width={100} height={100} />
        </div>
      </div>
      <div className="description">
        <p className="text-line">Assalam O Alaikum!</p>
        <p className="text-line">Hi, my name is Muhammad Muneeb. 👨‍💻👩‍🍼👦👶🍵</p>
        <p className="text-line">I&#39;m building stuff for client IOclient IO and MindManagerMindManager</p>
        <p className="text-line">
          In last 90 days on GitHub I pushed 148 commits, opened 18 PRs, merged 35 PRs, made 40 comments, created 20 branches, reviewed 7 PRs in public repositories.
        </p>
      </div>
    </div>
  );
};

export default Body;
