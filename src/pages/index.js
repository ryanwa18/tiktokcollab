import React from "react"
import SEO from '../components/seo'
import Layout from "../containers/layout/layout"
import Header from '../containers/layout/header'
import Footer from '../containers/layout/footer'
import AuthorArea from '../containers/home/author-area'
import RecentPostArea from '../containers/home/recent-post-area'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <div className="main-content">
      <AuthorArea/>
      {/*<RecentPostArea/>*/}
    </div>
    <Footer/>
  </Layout>
)

export default IndexPage
