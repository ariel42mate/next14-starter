import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/20184430/pexels-photo-20184430/free-photo-of-a-view-of-the-golden-gate-bridge-from-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="{styles.image}"
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a,
          veniam assumenda, vel eum cumque perferendis blanditiis eos inventore
          voluptate incidunt minima sequi illo non eveniet doloremque tenetur
          harum magni.
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
