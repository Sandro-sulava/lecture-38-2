import { Button } from "@/components/ui/button";
import PostsPage from "@/features/post/components/PostsPage";

const Home = () => {
  return (
    <div>
      {/* <Button variant="outline" size="lg">
        Button
      </Button>
      <Button variant="destructive" size="sm">
        Button
      </Button>
      <Button variant="secondary">Button</Button>
      <Button disabled variant="ghost">
        Button
      </Button>
      <Button variant="link">Button</Button> */}
      <PostsPage />
    </div>
  );
};

export default Home;
