module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d97e5a64255aba49a95b450a31952ce'),
  },
});
