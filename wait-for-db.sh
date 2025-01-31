#!/bin/sh
echo "Waiting for PostgreSQL to start..."
until nc -z -v -w30 postgres 5432; do
  echo "Waiting for database connection..."
  sleep 2
done
echo "PostgreSQL is up - starting application"
exec "$@"