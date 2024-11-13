import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { Button } from "@/components/ui/button";
import { IoSend } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const feedbackSchema = z.object({
  email: z.string().email("Invalid email address"),
  feedback: z.string().min(10, "minimum 10 characters required"),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

const FeedbackForm = ({
  onSubmitted,
}: {
  onSubmitted: (val: boolean) => void;
}) => {
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = (data: FeedbackFormData) => {
    console.log("Form submitted with data:", data);
    onSubmitted(true);
    reset();
  };

  return (
    <motion.div
      initial={{ y: 200, rotate: 5, opacity: 0.5 }}
      animate={{ y: 0, rotate: 0, opacity: 1 }}
      transition={{ delay: 0.2, ease: "easeOut" }}
      className="w-full justify-center items-center flex flex-col gap-3 font-[family-name:var(--font-assistant)]"
    >
      <div className="w-full relative">
        <Input
          {...register("email")}
          type="email"
          variant="underlined"
          label="Email"
          color={theme === "dark" ? "primary" : "default"}
        />
        {errors && errors.email && errors.email.message ? (
          <p className="absolute text-sm bottom-0 right-0 text-end text-red-800 dark:text-red-500">
            {errors.email.message}
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="w-full flex gap-1 justify-center items-end">
        <div className="w-full relative">
          <Textarea
            {...register("feedback")}
            variant="underlined"
            label="Feedback"
            color={theme === "dark" ? "primary" : "default"}
          />
          {errors && errors.feedback && errors.feedback.message ? (
            <p className="absolute text-sm bottom-0 right-0 text-end text-red-800 dark:text-red-500">
              {errors.feedback.message}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="relative w-10 h-10 flex justify-center items-center rounded-full">
          <div className="absolute inset-0 flex items-center justify-center pulse-effect-form-btn" />
          <Button
            variant="gooeyRight"
            type="submit"
            className="w-8 h-8 scale-about-btn rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 shadow-md transition-transform transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-600"
            onClick={handleSubmit(onSubmit)}
          >
            <IoSend className="size-5 dark:text-black-200 text-white-800" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackForm;
