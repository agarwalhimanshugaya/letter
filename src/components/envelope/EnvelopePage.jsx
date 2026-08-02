import { useState } from "react";
import Envelope from "./Envelope";
import "./Envelope.css";

export default function EnvelopePage({ onNext }) {

  const [opened,setOpened]=useState(false);

  function handleOpen(){

      setOpened(true);

  }

  return(

<section className="envelopePage">

<Envelope

opened={opened}

onOpen={handleOpen}

/>

{

opened && (

<button

className="readLetterBtn"

onClick={onNext}

>

📜 Read My Letter

</button>

)

}

</section>

);

}