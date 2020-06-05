import React from "react"
import SEO from '../components/seo'
import Layout from "../containers/layout/layout"
import Header from '../containers/layout/header'
import Footer from '../containers/layout/footer'
import HeroArea from '../containers/home/hero-area'
import FeaurePostArea from '../containers/home/feature-post-area'
import MainArea from '../containers/home/main-area'
import ContactArea from '../containers/home/contact-area'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header transparent/>
    <div className="main-content">
      <HeroArea/>
      <FeaurePostArea/>
      <MainArea/>
      <ContactArea/>          
    </div>
    <Footer/>
  </Layout>
)

export default IndexPage
