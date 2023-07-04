$(document).ready(()=>{
  $('#pesquisa-btn').click(()=>{
    var user = $('#username').val()
    const containsAt = user.indexOf('@') !== -1

    if(containsAt) {
      user = user.slice(1)
    } 

    const endpoint = `https://api.github.com/users/${user}`

    fetch(endpoint).then((resposta)=>{
      return resposta.json()
    }).then((json)=>{
      const avatarUrl = json.avatar_url
      const profileUrl = json.html_url
      const name = json.name
      const username = json.login
      const following = json.following
      const followers = json.followers
      const repos = json.public_repos

      $('#github').attr('href', profileUrl)
      $('#avatar').attr('src', avatarUrl)
      $('#nome').text(name)
      $('#login').text(`@${username}`)
      $('#seguindo').text(following)
      $('#seguidores').text(followers)
      $('#repositorios').text(repos)
    })
  })
})