const dynamodb = require('@aws-sdk/client-dynamodb')
const {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} = require('@aws-sdk/lib-dynamodb')

const client = new dynamodb.DynamoDBClient({
  region: 'us-east-1',
})
const ddbDocClient = new DynamoDBDocumentClient(client)

function addFeedback(feedback) {
  const cmd = new PutCommand({
    Item: {
      feedback: feedback.value,
    },
    TableName: 'cotiss_feedback',
  })
  return ddbDocClient.send(cmd)
}

async function getTopics() {
  const cmd = new ScanCommand({
    TableName: 'cotiss_feedback',
  })

  const response = await ddbDocClient.send(cmd)
  const items = response.Items
  console.log(items)

  return items.map((item) => ({
    feedback: item.feedback,
  }))
}
