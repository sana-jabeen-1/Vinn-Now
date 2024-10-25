import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Dynamically create the script element
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://tawk.to/chat/671bca1e2480f5b4f593d24e/1ib28r1vn";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Clean up the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tawk_66d2477aea492f34bc0bf0b4"></div>;
};

export default ChatWidget;
