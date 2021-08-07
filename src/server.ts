import generateApp from '~/app'
import { application } from '~/config'

const app = generateApp()

app.listen(application.port, () => {
  console.log(
    `server started at http://${application.host}:${application.port}`
  )
})
