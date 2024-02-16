import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/20184430/pexels-photo-20184430/free-photo-of-a-view-of-the-golden-gate-bridge-from-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.texCcontainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/20184430/pexels-photo-20184430/free-photo-of-a-view-of-the-golden-gate-bridge-from-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            height={50}
            width={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Ariel del Campo</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>23.02.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          adipisci aperiam doloribus modi sed quasi veniam deserunt numquam
          inventore sequi quae, dolorem consequuntur, fugiat est perferendis
          ullam laboriosam consectetur magni?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
