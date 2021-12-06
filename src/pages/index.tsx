import * as React from "react"
import {graphql} from "gatsby"
import styled from "styled-components"

import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"
import FlutterBuild from "../components/builds/FlutterBuild"
import {useWindowSize} from "react-use"
import GridSection from "../components/sections/GridSection"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({data}) => {
    const {width} = useWindowSize()
    const title = data.allContentfulCourse.edges[0].node.title
    const description = data.allContentfulCourse.edges[0].node.description
    const illustration = data.allContentfulCourse.edges[0].node.illustration.file.url
    const sections = data.allContentfulCourse.edges[0].node.sections

    return (
        <Layout>
            <Seo title="Advanced React Hooks" />
            <Wrapper>
                <HeroWrapper>
                    <CourseCard illustration={illustration}/>
                    <TextWrapper>
                        <Logo src="/images/logos/react-logo.svg" alt="logo"/>
                        <Title>{title}</Title>
                        <Caption>20 sections - 3 hours of videos</Caption>
                        <Description>
                            {description}
                        </Description>
                        <AuthorWrapper>
                            <AuthorImage src="/images/avatars/Meng.png" alt="avatar"/>
                            <Caption>Taught by Meng To</Caption>
                        </AuthorWrapper>
                        <PurchaseButton/>
                        <SmallText>
                            Purchase includes access to 30 courses. Over 80 hours of content,
                            including 12 hours for SwiftUI, for iOS 13 and iOS 14.
                        </SmallText>
                    </TextWrapper>
                </HeroWrapper>
                <Divider/>
                <GridSection sections={sections}/>
                <FlutterWrapper width={width}>
                    <FlutterBuild/>
                </FlutterWrapper>
            </Wrapper>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query IndexPageQuery {
        allContentfulCourse {
            edges {
                node {
                    title
                    description
                    illustration {
                        file {
                            url
                        }
                    }
                    sections {
                        title
                        description
                        slug
                        duration
                    }
                }
            }
        }
    }
`

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  overflow: hidden;
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;

  @media (max-width: 780px) {
    justify-items: center;
    text-align: center;
  }
`

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 360px auto;
  max-width: 1234px;
  gap: 60px;
  padding: 220px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 39px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`

const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Caption = styled.p`
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
  max-width: 400px;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`

const SmallText = styled.p`
  max-width: 280px;
  font-style: normal;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
`
const FlutterWrapper = styled.div`
  margin: 100px auto;

  @media (max-width: 1440px) {
    transform-origin: top left;
    transform: scale(${props => props.width / 1440});
  }

`

const Divider = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 60px auto 32px;
`