import React, { useState } from "react";
import axios from "axios";

const MessageCandidate = ({ applicationId }) => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const sendMessage = async () => {
    try {
      await axios.post("/api/employer/jobs/message", {
        applicationId,
        message,
      });
      setSuccess("Message sent successfully!");
    } catch (error) {
      setSuccess("Error sending message");
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Write your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={sendMessage}
      >
        Send Message
      </button>
      {success && <p>{success}</p>}
    </div>
  );
};

export default MessageCandidate;
