import { Room } from "@/app/Room";
import { Editor } from "@/app/Editor";
import Header from "@/components/Header";

const Document = () => {
  return (
    <div>
      <Room>
        <Header>This is a test document</Header>
        <Editor />
      </Room>
    </div>
  );
};

export default Document;
