module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-simple-vars": {},
    "postcss-preset-env": {
      stage: 0,
    },
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--xs": "(max-width:575px)" },
        },
        {
          customMedia: { "--sm": "(min-width:576px) and (max-width:767px)" },
        },
        {
          customMedia: { "--m": "(min-width:768px) and (max-width:991px)" },
        },
        {
          customMedia: { "--l": "(min-width:992px) and (max-width:1199px)" },
        },
        {
          customMedia: { "--xl": "(min-width:1200px)" },
        },
      ],
    },
  },
};
