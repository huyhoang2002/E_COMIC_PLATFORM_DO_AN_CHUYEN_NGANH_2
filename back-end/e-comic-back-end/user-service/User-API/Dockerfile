#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["user-service/User-API/User-API.csproj", "user-service/User-API/"]
RUN dotnet restore "user-service/User-API/User-API.csproj"
COPY . .
WORKDIR "/src/user-service/User-API"
RUN dotnet build "User-API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "User-API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "User-API.dll"]