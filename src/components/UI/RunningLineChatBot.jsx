"use client";

import { ChatBot } from "../icons/IconsComponents";

const RunningLineChatBot = ({ locale }) => {
  const messages = [{ en: "We have a chatbot!", uk: "у нас з'явився чат-бот!" }];

  const repeatedItems = [
    ...messages,
    ...messages,
    ...messages,
    ...messages,
    ...messages,
    ...messages,
    ...messages,
  ];
  return (
    <div className="running-line-wrapper w-full overflow-hidden bg-red/40 mt-1 xl:mt-0">
      <div className="relative">
        <div className="running-line flex w-max animate-running-line gap-4 xl:gap-8">
          {repeatedItems.map((text, idx) => (
            <div key={idx} className="flex items-center gap-4 whitespace-nowrap shrink-0">
              <div className="w-16 h-16 flex items-center justify-center">
                <a
                  href="https://t.me/PROFSPILKA_NP_BOT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <ChatBot />
                </a>
              </div>

              <span className="text-2xl xl:text-[36px] font-bold text-white uppercase">
                {text[locale]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningLineChatBot;
