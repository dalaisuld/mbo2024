import Image from 'next/image'
import styles from './page.module.css'
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from './components/PostMetadata';
import getPostMetadata from './components/getPostMetadata';
import PostPreview from './components/PostPreview';

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post}/>
  ));
  
  return <div>{postPreviews}</div>;
};

export default Home;
