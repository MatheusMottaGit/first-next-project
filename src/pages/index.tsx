import { GetServerSideProps, GetStaticProps } from "next"
// import { useEffect, useState } from "react"


export const getStaticProps: GetStaticProps = async () =>{

  const response = await fetch('https://api.github.com/users/MatheusMottaGit/repos')
  const data = await response.json()

    const reposNames = data.map(item=>item.name)

  return{
    props:{
      repos: reposNames
    }
  }
}

export default function Home({repos}) {
  return (
      <div>
        {
          repos.map(repo=>(
            <li key={repo}>{repo}</li>
          ))
        }
      </div>
  )
}
