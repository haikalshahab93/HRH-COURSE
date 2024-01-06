import { request, gql } from 'graphql-request'
const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/clqxoytkltnh801um26frf58e/master"

export const getCourseList = async (level) => {
  const query = gql`
    query CourseList {
        courses(where: {level: `+ level + `}) {
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
            content {
              heading
              description {
                markdown
              }
              output {
                markdown
              }
            }
            title
            id
          }
        }
      }
    `

  const result = await request(MASTER_URL, query);
  return result
}

export const enrollCourse = async (courseId, userEmail) => {
  const mutationQuery = gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: { 
        courseId: "${courseId}", 
        userEmail: "${userEmail}", 
        course: { connect: { id: "${courseId}" } } 
      }
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
`

  const result = await request(MASTER_URL, mutationQuery)
  return result;
}


export const getUserEnrolledCourse = async (userUd, userEmail) => {
  const query = gql`query GetUserEnrolledCourse {
    userEnrolledCourses(where: {courseId: "${1}", userEmail: "${2}"}) {
      id
      courseId
      completedChapter {
        chapterid
      }
    }
  }`
  const result = await request(MASTER_URL, getUserEnrolledCourse)
  return result;
}
