#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["favorite-service/Favorite.API/Favorite.API.csproj", "favorite-service/Favorite.API/"]
COPY ["favorite-service/Favorite.Service/Favorite.Service/Favorite.Service.csproj", "favorite-service/Favorite.Service/Favorite.Service/"]
COPY ["favorite-service/Favorite.Data/Favorite.Data/Favorite.Data.csproj", "favorite-service/Favorite.Data/Favorite.Data/"]
COPY ["favorite-service/Favorite.Business/Favorite.Business/Favorite.Business.csproj", "favorite-service/Favorite.Business/Favorite.Business/"]
COPY ["event-processor/EventProcessor/EventProcessor.csproj", "event-processor/EventProcessor/"]
RUN dotnet restore "favorite-service/Favorite.API/Favorite.API.csproj"
COPY . .
WORKDIR "/src/favorite-service/Favorite.API"
RUN dotnet build "Favorite.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Favorite.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Favorite.API.dll"]