import {Badge, Avatar} from "@nextui-org/react";

 const PersonalBadge = () => {
  return (
    <div className="flex gap-5 items-center">
     
      <Badge content="" color="primary" shape="circle" placement="bottom-right" className="animate-pulse border-[1px]
       dark:border-black-200 border-white-700">
        <Avatar
          radius="full"
          className="electric-lightning-effect border-[1px] dark:border-blue-500 border-blue-800"
          src="/images/my_picture_logo.jpg"
        />
      </Badge>
      
    </div>
  );
}
export default PersonalBadge;