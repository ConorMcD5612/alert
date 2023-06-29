

const NOTIFICATION_TITLE = 'Check'

const CLICK_MESSAGE = 'Notification clicked'
const IMAGE = './image/github.png'
console.log(IMAGE)



const createNotification = () => {
  const NOTIFICATION_BODY =
  `LEETCODE 0/1\nGITHUB COMMIT 0/1`
  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY, icon: IMAGE, requireInteraction: true})
}


setInterval(() => {
  const date = new Date()
  console.log(date.getMinutes())
  if(date.getMinutes() == 0 ){
    createNotification()
  }

}, 60 * 1000)
  //message goes off every hour 

//when date object mins is 00:00