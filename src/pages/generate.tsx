/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Button } from "~/component/Button";
import { FormGroup } from "~/component/FormGroup";
import { Input } from "~/component/Input";
import { api } from "~/utils/api";
import { type SubmitHandler, useForm } from "react-hook-form";

const colors = [
  "blue",
  "red",
  "pink",
  "green",
  "orange",
  "yellow",
  "white",
  "black",
];

type GenerateForm = {
  prompt: string;
  color: string;
};

const GeneratePage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenerateForm>();

  const [imageUrl, setImageUrl] = useState("");

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess(data) {
      if (!data.imageUrl) return;
      setImageUrl(data.imageUrl);
    },
  });

  function handleFormSubmit(formData: GenerateForm) {
    console.log("we are here");
    generateIcon.mutate(formData);
  }

  return (
    <>
      <Head>
        <title>Generate Icons</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-24 flex min-h-screen flex-col gap-4 px-8">
        <h1 className="text-6xl">Generate your icons</h1>
        <p className="mb-12 text-2xl">
          Fill out the form below to start generating your icons.
        </p>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <h2 className="text-xl">
            1. Describe what your want your icon to look like.
          </h2>
          <FormGroup className="mb-12">
            <label>Prompt</label>
            <Input {...register("prompt", { required: true })}></Input>
          </FormGroup>

          <h2 className="text-xl">2. Pick your icon color.</h2>
          <FormGroup className="mb-12 grid grid-cols-4">
            {colors.map((color) => (
              <label key={color} className="flex gap-2 text-2xl">
                <input
                  type="radio"
                  {...register("color", { required: true })}
                ></input>
                {color}
              </label>
            ))}
          </FormGroup>

          <Button
            isLoading={generateIcon.isLoading}
            disabled={generateIcon.isLoading}
          >
            Submit
          </Button>
        </form>

        {imageUrl && (
          <>
            <h2 className="text-xl">Your Icons</h2>
            <section className="mb-12 grid grid-cols-4 gap-4">
              <Image
                src={imageUrl}
                alt="an image of your generated prompt"
                width="100"
                height="100"
                className="w-full"
              />
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default GeneratePage;
