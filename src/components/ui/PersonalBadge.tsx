import {Badge, Avatar} from "@nextui-org/react";

 const PersonalBadge = () => {
  return (
    <div className="flex gap-5 items-center">
     
      <Badge content="" color="primary" shape="circle" placement="bottom-right">
        <Avatar
          radius="full"
          className="electric-lightning-effect border-[1px] dark:border-blue-500 border-blue-800"
          src="https://res.cloudinary.com/course-yuga/image/upload/v1729615601/userImages/ofe64eafmsstzlspi8op.png"
        />
      </Badge>
      
    </div>
  );
}
export default PersonalBadge;