module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa5fffcaccbe297c5956927178e3af39'),
  },
});
