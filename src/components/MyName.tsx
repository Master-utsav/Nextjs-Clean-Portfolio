import { cn } from "@/lib/utils";

const MyName = ({ className }: { className: string }) => {
  return (
    <svg
      width="278"
      height="72"
      viewBox="0 0 278 72"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "my-name invert dark:invert-0")}
    >
      
      {/* U Path */}
      <path d="M15.6713 9.616C15.6713 14.416 15.1913 20.752 14.2313 28.624C13.3353 36.496 12.8873 42.576 12.8873 46.864C12.8873 51.152 14.0393 54.736 16.3433 57.616C18.6473 60.432 22.0713 61.84 26.6153 61.84C28.4713 61.84 30.7113 61.392 33.3353 60.496C35.9593 59.6 38.0393 58.448 39.5753 57.04C40.4073 49.936 40.8233 40.816 40.8233 29.68C40.8233 18.48 40.0233 9.392 38.4233 2.41599C40.4713 1.648 42.6473 1.264 44.9513 1.264C47.2553 1.264 49.2393 2 50.9033 3.472C52.6313 4.944 53.4953 6.864 53.4953 9.232C53.4953 11.6 53.2073 15.664 52.6313 21.424C52.1193 27.184 51.8633 33.648 51.8633 40.816C51.8633 47.92 52.1833 54.192 52.8233 59.632C43.4793 67.312 34.0073 71.152 24.4073 71.152C17.1113 71.152 11.4153 69.296 7.31925 65.584C3.28725 61.808 1.27125 56.368 1.27125 49.264C1.27125 47.024 1.46325 42.992 1.84725 37.168C2.29525 31.28 2.51925 26.992 2.51925 24.304C2.51925 14.64 1.87925 7.536 0.59925 2.992C2.64725 2.224 4.82325 1.84 7.12725 1.84C9.43125 1.84 11.4153 2.576 13.0793 4.048C14.8073 5.52 15.6713 7.376 15.6713 9.616ZM" />

      {/* T Path */}
      <path d="M67.0373 1.55199L87.2933 1.84C97.7893 1.84 105.469 1.456 110.333 0.687994C111.037 2.032 111.389 3.568 111.389 5.296C111.389 7.024 110.621 8.592 109.085 10C107.549 11.344 105.693 12.016 103.517 12.016L92.4773 10.768C92.4773 11.216 92.3173 13.2 91.9973 16.72C91.1013 25.36 90.6533 34.032 90.6533 42.736C90.6533 51.44 91.3253 60.144 92.6693 68.848C90.5573 69.616 88.3493 70 86.0453 70C83.7413 70 81.7573 69.36 80.0933 68.08C78.4293 66.736 77.5973 64.752 77.5973 62.128C77.5973 59.44 77.9173 54.736 78.5573 48.016C79.1973 41.296 79.5173 34.768 79.5173 28.432C79.5173 22.032 79.1973 16.08 78.5573 10.576C70.8133 10.96 64.7653 12.048 60.4133 13.84C59.6453 12.368 59.2613 10.736 59.2613 8.944C59.2613 7.088 59.9973 5.392 61.4693 3.856C62.9413 2.32 64.7973 1.55199 67.0373 1.55199ZM" />

      {/* S Path */}
      <path d="M147.846 22.576C148.102 21.296 148.23 19.984 148.23 18.64C148.23 12.432 145.19 9.328 139.11 9.328C136.358 9.328 134.022 9.904 132.102 11.056C130.31 13.168 129.414 15.696 129.414 18.64C129.414 20.56 130.246 22.224 131.91 23.632C133.574 24.976 135.622 26.032 138.054 26.8C140.55 27.568 143.238 28.528 146.118 29.68C148.998 30.832 151.654 32.08 154.086 33.424C156.582 34.704 158.662 36.656 160.326 39.28C161.99 41.84 162.822 44.88 162.822 48.4C162.822 55.12 160.23 60.592 155.046 64.816C149.926 69.04 143.75 71.152 136.518 71.152C130.694 71.152 125.734 69.712 121.638 66.832C117.606 63.888 115.59 59.792 115.59 54.544C115.59 51.856 116.39 49.616 117.99 47.824C119.654 45.968 121.606 45.04 123.846 45.04C126.15 45.04 127.846 45.328 128.934 45.904C128.422 47.824 128.166 49.552 128.166 51.088C128.166 54.544 129.126 57.296 131.046 59.344C133.03 61.328 135.75 62.32 139.206 62.32C142.662 62.32 145.446 61.424 147.558 59.632C149.67 57.84 150.726 55.472 150.726 52.528C150.726 49.52 149.542 47.056 147.174 45.136C144.87 43.216 142.054 41.68 138.726 40.528C135.398 39.376 132.07 38.16 128.742 36.88C125.414 35.6 122.566 33.712 120.198 31.216C117.894 28.656 116.742 25.456 116.742 21.616C116.742 15.6 119.334 10.608 124.518 6.64C129.766 2.672 135.686 0.687994 142.278 0.687994C147.142 0.687994 151.334 1.67999 154.854 3.664C158.438 5.584 160.23 8.528 160.23 12.544C160.23 15.824 159.206 18.896 157.078 21.376C154.996 23.856 151.662 25.712 147.846 22.576Z" />

      {/* A Path */}
      <path d="M187.16 2.608C189.848 1.712 192.28 1.264 194.456 1.264C197.784 1.264 200.376 2.448 202.232 4.816C204.088 7.12 205.528 10.416 206.552 14.704C206.872 15.984 207.512 18.8 208.472 23.152C209.496 27.504 210.328 31.024 210.968 33.712C212.952 42.096 214.744 48.592 216.344 53.2C218.008 57.808 220.632 61.488 224.216 64.24C223.448 66.16 222.168 67.696 220.376 68.848C218.648 70 216.76 70.576 214.712 70.576C210.04 70.576 206.616 67.056 204.44 60.016C203.416 56.752 202.488 53.552 201.656 50.416C199.416 51.184 196.632 51.568 193.304 51.568C190.04 51.568 186.008 51.216 181.208 50.512C179.224 58.256 178.232 64.08 178.232 67.984C178.232 68.816 178.264 69.424 178.328 69.808C177.496 69.936 176.088 70 174.104 70C172.12 70 170.36 69.392 168.824 68.176C167.352 66.896 166.616 65.104 166.616 62.8C166.616 59.6 169.688 50.224 175.832 34.672C181.976 19.12 185.752 8.432 187.16 2.608ZM183.416 42.448C185.976 42.768 188.568 42.928 191.192 42.928C193.88 42.928 196.728 42.64 199.736 42.064C199.16 39.44 197.208 29.392 193.88 11.92C189.912 22.224 186.424 32.4 183.416 42.448Z" />

      {/* V Path */}
      <path d="M256.454 69.232C253.766 70.128 251.334 70.576 249.158 70.576C245.894 70.576 243.334 69.392 241.478 67.024C239.686 64.592 238.214 61.168 237.062 56.752C236.806 55.792 235.91 52.272 234.374 46.192C231.366 34.288 228.934 25.68 227.078 20.368C225.222 14.992 222.502 10.928 218.918 8.17599C219.686 6.256 220.934 4.72 222.662 3.568C224.454 2.416 226.534 1.84 228.902 1.84C231.27 1.84 233.222 2.768 234.758 4.62399C236.294 6.41599 237.51 8.62399 238.406 11.248C239.366 13.872 240.198 16.4 240.902 18.832C241.606 21.264 242.342 24.272 243.109 27.856C243.942 31.44 244.582 34.352 245.03 36.592C245.542 38.768 246.31 42.544 247.334 47.92C248.422 53.232 249.222 57.104 249.734 59.536C260.486 31.504 265.862 12.784 265.862 3.376C265.862 2.544 265.83 1.936 265.766 1.55199C266.726 1.36 267.718 1.264 268.742 1.264C271.302 1.264 273.382 1.904 274.982 3.184C276.646 4.4 277.478 6.16 277.478 8.464C277.478 11.664 274.31 21.136 267.974 36.88C261.702 52.56 257.862 63.344 256.454 69.232Z" />
    </svg>
  );
};

export default MyName;