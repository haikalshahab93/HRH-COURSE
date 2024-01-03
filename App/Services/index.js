import {request,gql} from 'graphql-request'
const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/clqxoytkltnh801um26frf58e/master"

export const getCourseList = async(level)=>{
    const query = gql`
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          name
          price
          level
          tags
          time
          author
          description{
            markdown
          }
          banner {
            url
          }
          chapters {
            id
          }
        }
      }
    `

    const result = await request(MASTER_URL,query);
    return result
}