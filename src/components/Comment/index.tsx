import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/jocabadasss.png"
        alt="foto de perfil"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Carlos</strong>
              <time
                title="25 de janeiro de 2024 às 02:24 PM"
                dateTime="2024-01-25 02:24:30 PM"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
