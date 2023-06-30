

const NOTIFICATION_TITLE = 'Check'

const IMAGE = './image/github.png'
let buttons = document.querySelectorAll('.complete-btn')

let isDone = {
  leetCode: 0,
  gitCommit: 0
}

console.log(buttons)

buttons.forEach((button) => {

  button.addEventListener('click', () => {
   button.parentNode.innerText = '1/1'
   isDone[button.id] = 1
  })
} )


const createNotification = () => {
  let notificationText = `LEETCODE ${isDone.leetCode}/1\nGITHUB COMMIT ${isDone.gitCommit}/1`
  new Notification(NOTIFICATION_TITLE, { body: notificationText, icon: IMAGE, requireInteraction: true})
}

const interval = setInterval(() => {
  const date = new Date()
  console.log(date.getMinutes())

  if(date.getMinutes() == 0 ){
    createNotification()
  }

  if(Object.values(isDone).every(item=>item)){
    clearInterval(interval)
  }

}, 60 * 1000)
 