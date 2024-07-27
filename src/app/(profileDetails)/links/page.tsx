import { Button } from "@/components/ui/button";
import { Lock } from "@/components/Icons";

export default function Page() {
  return (
    <>
      <div className="flex flex-grow flex-shrink-0 items-start gap-6 p-4 self-stretch">
      <div className="flex flex-col items-start bg-white rounded-xl self-stretch">
        <div className="flex flex-col flex-grow flex-shrink-0 items-start gap-10 p-6 self-stretch">
          <div className="flex flex-col gap-2 item-start self-stretch">
            <h2 className="font-bold font-instrument text-2xl text-darkGrey not-italic leading-9 self-stretch">
              Customize your links
            </h2>
            <h3 className="font-instrument font-normal text-base text-grey not-italic leading-6 self-stretch">
              Add/edit/remove links below and then share all your profile with
              the world!
            </h3>
          </div>

          <div className="flex flex-col flex-grow flex-shrink-0 justify-start items-start gap-6 self-stretch">
            <div className="flex flex-col flex-grow flex-shrink-0 justify-start items-start gap-6 self-stretch">

              <Button
                // type="submit"
                className="flex flex-col justify-center items-center gap-2 border-1 border-purple py-2.5 border-solid rounded-lg w-full font-instrument font-semibold text-white not-italic leading-6 self-stretch"
                >
                +Add new link
              </Button>

              <div className="flex flex-col flex-1 justify-center items-center bg-light-grey p-5 rounded-xl text-2xl text-center text-darkGrey overflow-hidden self-stretch">
                <div className="flex flex-col justify-start items-center gap- self-stretch">
                  <Lock />
                  <b className="leading-9 self-stretch">
                    Let’s get you started
                  </b>
                  <div className="text-base text-grey self-stretch">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><div className="flex flex-col justify-end items-start w-full font-heading-s text-[1rem] text-left text-white">
        <div className="bg-borders h-[0.063rem] self-stretch" />
        <div className="flex flex-col justify-start items-end p-[1rem] self-stretch">
          <div className="flex flex-col justify-center items-center bg-purple opacity-25 px-[1.687rem] py-[0.687rem] rounded-lg self-stretch">
            <div className="w-9 h-6">
              <div className="font-semibold leading-9">
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
