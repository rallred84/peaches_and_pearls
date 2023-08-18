import headshot from "../images/kimberly.jpeg";

const Sidebar = () => {
  return (
    <aside>
      <h2>About Me</h2>
      <img
        src={headshot}
        alt="Professional headshot of Kimberly"
        id="headshot"
      />
      <h3>Kimberly Allred</h3>
      <p>
        {`Hello! I'm a Texas Transplant with a big heart for Jesus, soft spot for
        family, and a great desire for fellowship. I believe a good meal with a
        big smile and a prayer can change a life if only someone took the time
        to make it happen. This is my opportunity to show that you don't know
        unless you try.`}
      </p>
    </aside>
  );
};

export default Sidebar;
