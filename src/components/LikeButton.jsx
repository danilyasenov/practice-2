import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

function LikeButton() {
  const { theme } = useTheme();
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`like-button ${theme}`}
    >
      {liked ? "❤️ Лайк" : "🤍 Лайк"}
    </button>
  );
}

export default LikeButton;
