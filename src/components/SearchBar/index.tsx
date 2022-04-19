import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import "./index.css";
import PropTypes from "prop-types";
import axios from 'axios';
import { searchTrack } from "../../data/fetchApi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slice/authSlice";
import { SearchIcon } from '@chakra-ui/icons';
import { Button, Input } from '@chakra-ui/react';
import { ResponseTracks, Track } from '../../data types/tracks';
import { useAppDispatch, useAppSelector } from '../../store';

interface Iops {
    onSuccess: (tracks: Track[], text: string) => void;
    onClearSearch: () => void;
}


const SearchBar: React.FC<Iops> = ({ onSuccess, onClearSearch }) => {
  const accessToken: string = useAppSelector((state) => state.auth.accessToken);
  const [text, setText] = useState<string>("");
  const [isClear, setIsClear] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLDivElement> & FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const response: ResponseTracks = await searchTrack(text, accessToken);

      const tracks: Track[] = response.tracks.items;
      onSuccess(tracks, text);
      setIsClear(false);
    } catch (error) {
      if (error.response?.status === 401) {
        // dispatch(logout());
      } else {
        toast.error(error.message);
      }
    }
  };

  const handleClear: () => void = () => {
    onClearSearch();
    setText("");
    setIsClear(true);
  };

  return (
    <div>
      <form className="form-search" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search track..." className="form-search__input" required value={text} onChange={handleInput} />
        <Button type="submit"><SearchIcon/></Button>
      </form>

      {!isClear && (
        <Button variant="text" onClick={handleClear} className="mt-1">
          Clear search
        </Button>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
};


export default SearchBar;