BEGIN;
    ALTER TABLE social_users ADD COLUMN oiaescuela VARCHAR;
    ALTER TABLE social_users ADD COLUMN oiaciudad VARCHAR;
    ALTER TABLE social_users ADD COLUMN oiaprovincia VARCHAR;
ROLLBACK;
