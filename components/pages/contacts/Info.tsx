import { MessagesSquare, CircleUserRound, PhoneIcon } from "lucide-react";

export default function Info() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Связаться с Нами</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Свяжитесь с нами для любых вопросов.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <MessagesSquare className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <div>
            <p className="font-medium text-black-500 hover:text-gray-700 hover:underline transition-colors duration-120"><a target="_blank" href="https://t.me/poodle_ocharovanie">Telegram channel</a></p>
            <p className="text-gray-500 dark:text-gray-400">
              Следите за нашими постами!
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <div>
            <p className="font-medium">WhatsApp</p>
            <p className="text-gray-500 dark:text-gray-400">
            +7 (906) 075-37-70
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <CircleUserRound className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <div>
            <p className="font-medium">Салеева Жанна Ивановна</p>
            <p className="text-gray-500 dark:text-gray-400">
              Заводчик
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
