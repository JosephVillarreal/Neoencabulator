interface NodeSectionProps {
  id: string
  item: string
  value: string
  valueSetter: (callBack: Function) => void
}
function NodeSection(Props: NodeSectionProps) {
  return (
    <>
      <TextField value={Props.value} onChange={Props.valueSetter()}>
      </TextField>
      <Button color="primary" variant="contained"
        onClick={() => {
          // We need to fix how our insert Axios call works. It needs two inputs.
          InsertToLinkedList(Props.value);
        }}
      >
        +
      </Button>
      <br />
      <Typography>
        {
          Props.item
        }
      </Typography>
      <Button color="primary" variant="contained"
        onClick={() => {
          RemoveFromLinkedList(Props.id);
        }}
      >
        -
      </Button>
    </>
  )
}