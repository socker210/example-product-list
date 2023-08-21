import { Button } from 'ui'

const Page: React.FC = () => {
  return (
    <div>
      <Button
        onClick={() => {
          console.log('hahah')
        }}
      >
        haha
      </Button>
    </div>
  )
}

export default Page
