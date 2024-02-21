"use client"

type Props = {
    size: number;
  }

export const CreateSquare = (props:Props) => {
    for(let i = 0; i < props.size; i++) {
      console.log('*'.repeat(props.size));
    }
  }
  