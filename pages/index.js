import HomeHeader from "@/components/HomeHeader";
import HomeStats from "@/components/HomeStats";
import Layout from "@/components/Layout";
import LoginPage from "@/components/Login";
// import LoginPage from "@/components/login";

export default function Home() {
  return (
    
    <Layout>
      <title>Home</title>
      <HomeHeader />
      <HomeStats />
    </Layout>
    // <LoginPage>
    //   <HomeHeader/>
    //   <HomeStats/>
    //   </LoginPage>
  )
}
